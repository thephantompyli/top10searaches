import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Separator } from "@/components/ui/separator"
import BlogList, { Blog } from "@/components/Blogs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { promise } from "zod";
import { createServerSupabaseClient } from '@/backend/server'
import { cookies } from 'next/headers'
import * as React from "react"
import SelectInHome from "@/components/SelectInHome";








export default async function Page() {
  const supabase = await createServerSupabaseClient();
  const blogs = await supabase.from('blogs').select('*') || [];

  if (!blogs) {
    console.error('Fetch error:');
    return <div>Error loading blogs</div>;
  }
  // const [searchTerm, setSearchTerm] = useState("");
  return (

    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" className="text-sm sm:text-base md:text-lg truncate">
                    Home Page
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                {/* <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div>
        </div>

        <div className="flex flex-1 flex-col gap-2 sm:gap-4 p-2 sm:p-4 pt-0"  style={{
            
            alignItems: 'center'
        }}>
          <h1
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
            className="scroll-m-20 text-center font-extrabold tracking-tight text-balance text-2xl sm:text-3xl md:text-4xl px-2 sm:px-4 break-words"
          >            Top 10 searches in  
          </h1>
          {/* <div className=÷"w-full max-w-full sm:max-w-[70%] overflow-x-auto overflow-y-auto flex justify-center px-4" style={{ maxHeight: '80vh' }}> */}
            <SelectInHome />
          {/* </div> */}


          {/* <img
    src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_50,w_2600/hellofresh_s3/image/soy-glazed-salmon-with-rice-3375dda8.jpg"
    alt="Abstract"
    className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min object-cover w-full"
  /> */}
        </div>

      </SidebarInset>
    </SidebarProvider>
  )
}
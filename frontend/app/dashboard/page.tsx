import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CarouselSize } from "@/components/Carousel"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
export default function Page() {
  const imageData = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      originalPrice: 100,
      discountedPrice: 75,
    },
    {
      url: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
      originalPrice: 120,
      discountedPrice: 90,
    },
    {
      url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
      originalPrice: 80,
      discountedPrice: 60,
    },
    {
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
      originalPrice: 95,
      discountedPrice: 71.25,
    },
   
   
    {
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b",
      originalPrice: 140,
      discountedPrice: 98,
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      originalPrice: 160,
      discountedPrice: 128,
    },{
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b",
      originalPrice: 140,
      discountedPrice: 98,
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      originalPrice: 160,
      discountedPrice: 128,
    },
    {
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b",
      originalPrice: 140,
      discountedPrice: 98,
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      originalPrice: 160,
      discountedPrice: 128,
    },
  ]
  return (

    <SidebarProvider>
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
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
     <div>
     </div>
       <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {imageData.map(({ url, originalPrice, discountedPrice }, index) => {
            const percentageOff = Math.round(
              ((originalPrice - discountedPrice) / originalPrice) * 100
            )
            return (
              <div key={index} className="flex flex-col items-start gap-2">
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="aspect-video rounded-xl object-cover w-full"
                />
                <div className="text-sm text-muted-foreground px-1">
                  <p>Original: ${originalPrice}</p>
                  <p>Now: ${discountedPrice}</p>
                  <p>{percentageOff}% off</p>
                </div>
              </div>
            )
          })}
        </div>
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
"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const navCategories = [
    {
      title: "Blogs",
      items: ["Latest", "TopRated"],
    }
    // ,
    // {
    //   title: "Tshirts",
    //   items: ["Oversized", "Graphic", "Plain", "Full Sleeve"],
    // },
    // {
    //   title: "Shirts",
    //   items: ["Formal", "Casual"],
    // },
    // {
    //   title: "Posters",
    //   items: ["Motivational", "Anime"],
    // },

  ]
 
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {navCategories.map((category) => (
          <SidebarMenu key={category.title}>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <span>{category.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {category.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem}>
                        <span>{subItem}</span>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}




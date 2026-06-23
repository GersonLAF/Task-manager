import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { NotebookPenIcon } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuButton>
            Tasks
            <NotebookPenIcon />
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserButton showName/>
      </SidebarFooter>
    </Sidebar>
  )
}
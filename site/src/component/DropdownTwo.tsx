'use client'
// import {
// CreditCard,
// Keyboard,
// Plus,
// Settings,
// User,
// Users,
// } from "lucide-react"

import { Button } from "@/components/ui/button";

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavLink } from "react-router-dom";

export function DropdownTwo() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">Resources</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-xl font-bold">Resources here</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <NavLink to="/blog">
                <span className="text-lg font-medium">Blogs</span>
            </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            
            <NavLink to="/ebooks">
            <span className="text-lg font-medium">E-books</span>
            </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            <NavLink to="/stream">
            <span className="text-lg font-medium">Streams</span>
            </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
)
}

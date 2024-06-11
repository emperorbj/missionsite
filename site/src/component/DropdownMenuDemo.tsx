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

export function DropdownMenuDemo() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg">Events</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-xl font-bold">Monthly Program</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">Our Faith</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            {/* <CreditCard className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">Global Outreach</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">Prayer drills</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
)
}


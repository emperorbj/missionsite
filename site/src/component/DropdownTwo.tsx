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

export function DropdownTwo() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg">Resources</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-xl font-bold">Resources here</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">Our Faith letters</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            {/* <CreditCard className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">E-books</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            {/* <Settings className="mr-2 h-4 w-4" /> */}
            <span className="text-lg font-medium">Streams</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
)
}

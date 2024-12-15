'use client'


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

export function DropdownMenuDemo() {
return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="text-[16px] py-6 font-semibold">Events</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-lg font-bold">Monthly Program</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        {/* <DropdownMenuItem>
            {/* <User className="mr-2 h-4 w-4" /> */}
        <DropdownMenuSeparator />
        <NavLink to="/event">
        <DropdownMenuItem>
            {/* <CreditCard className="mr-2 h-4 w-4" /> */}
            <span className="text-[16px] font-medium">Global Outreach</span>
        </DropdownMenuItem>
        </NavLink>
        <NavLink to="/faith-reason">
        <DropdownMenuItem>
                <span className="text-[16px] font-medium">Faith & Reason</span>
        </DropdownMenuItem>
        </NavLink>
        <DropdownMenuSeparator/>
        </DropdownMenuGroup>
    </DropdownMenuContent>
    </DropdownMenu>
)
}


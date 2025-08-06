import Link from "next/link"
import { Menu, ShoppingBag, Heart, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/shop" className="text-lg font-medium">
                  Shop
                </Link>
                <Link href="/wishlist" className="text-lg font-medium">
                  Wishlist
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/account" className="text-lg font-medium">
                  Account
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Top 10 Searches</span>
          </Link>
        </div>
 <div className="flex items-center gap-2 flex-1 max-w-sm">
          {/* <div className="relative flex-1"> */}
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            {/* <Input type="search" placeholder="Search..." className="pl-8 w-full" /> */}
          {/* </div> */}
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          {/* <Link href="/shop" className="font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="/wishlist" className="font-medium transition-colors hover:text-primary">
            Wishlist
          </Link> */}
          <Link href="/about" className="font-medium transition-colors hover:text-primary">
            About
          </Link>
          <div className="flex items-center gap-2">
                    <div className="flex-1" />

          {/* <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Button>
          </Link> */}
          {/* <Link href="/bag">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping bag</span>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                0
              </span>
            </Button>
          </Link> */}
          {/* <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link> */}
        </div>
        </nav>


       
      </div>
    </header>
  )
}

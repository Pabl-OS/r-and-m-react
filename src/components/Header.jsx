import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Divider} from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
  <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 bg-transparent" justify="center">
        <NavbarBrand>

          <p className="font-bold text-inherit">RICK & MORTY</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit  lg:text-2xl">RICK & MORTY</p>


        </NavbarBrand>
          <NavLink  to="character" className={({ isActive }) => isActive ? "font-bold lg:text-lg" : "lg:text-lg" }> Personajes </NavLink>
          <NavLink  to="episodies" className={({ isActive }) => isActive ? "font-bold lg:text-lg" : "lg:text-lg" }> Episodios </NavLink>
          <NavLink  to="locations" className={({ isActive }) => isActive ? "font-bold lg:text-lg" : "lg:text-lg" }> Localizaciones </NavLink>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarMenu className='bg-transparent' >

          <NavbarMenuItem >
            <NavLink  to="character" className={({ isActive }) => isActive ? "font-bold text-3xl text-white" : "text-2xl text-white" }> Personajes </NavLink>
          </NavbarMenuItem>
          <Divider className='bg-white/10' />
          <NavbarMenuItem > 
            <NavLink  to="episodies" className={({ isActive }) => isActive ? "font-bold text-3xl text-white" : "text-2xl text-white" }> Episodios </NavLink>
          </NavbarMenuItem>
          <Divider className='bg-white/10' />
          <NavbarItem>
            <NavLink  to="locations" className={({ isActive }) => isActive ? "font-bold text-3xl text-white" : "text-2xl text-white" }> Localizaciones </NavLink>
          </NavbarItem>
          

      </NavbarMenu>
    </Navbar>
  )
}

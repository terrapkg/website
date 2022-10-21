import { Button, Container, Link, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import terraLogo from "../public/terra.svg";

const MainNavbar = () => {
  return (
    <Navbar variant="static" maxWidth="fluid">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Image src={terraLogo} alt="Terra Logo" width={50} height={50} />
        <Text b color="inherit" hideIn="xs">
          Terra
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {/* <NextLink href="/docs">
          <Navbar.Link>Docs</Navbar.Link>
        </NextLink> */}
        <Navbar.Link href="https://github.com/terrapkg/packages">
          Contribute
        </Navbar.Link>
        {/* <Navbar.Link href="#">Search</Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Collapse>
        {/* <Navbar.CollapseItem>
          <NextLink href="/docs">
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
            >
              Docs
            </Link>
          </NextLink>
        </Navbar.CollapseItem> */}
        <Navbar.CollapseItem>
          <Link
            href="https://github.com/terrapkg/packages"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            Contribute
          </Link>
        </Navbar.CollapseItem>
        {/* <Navbar.CollapseItem>
          <Link
            href="#"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            Search
          </Link>
        </Navbar.CollapseItem> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;

import { Button, Link, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import terraLogo from "../public/terra.svg";

const MainNavbar = () => {
  return (
    <Navbar variant="static" maxWidth="fluid">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Image src={terraLogo} alt="Terra Logo" width={50} height={50} />
        <Text b color="inherit">
          Terra
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {/* TODO: We need an actual docs page */}
        <Navbar.Link href="https://github.com/terrapkg/packages/tree/main/docs">
          Docs
        </Navbar.Link>
        <Navbar.Link href="https://github.com/terrapkg/packages">
          Sources
        </Navbar.Link>
        <Navbar.Link href="https://repology.org/repository/terra_37">
          Repology
        </Navbar.Link>
        <Navbar.Link href="https://github.com/terrapkg/packages/tree/main/docs">
          Explore
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Install
          </Button>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link
            href="https://github.com/terrapkg/packages/tree/main/docs"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            About
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href="https://github.com/terrapkg/packages"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            Sources
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href="https://repology.org/repository/terra_37"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            Repology
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href="https://github.com/terrapkg/packages/tree/main/docs"
            color="inherit"
            css={{
              minWidth: "100%",
            }}
          >
            Explore
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;

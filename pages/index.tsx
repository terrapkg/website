import {
  Snippet,
  Col,
  Container,
  Row,
  Text,
  Link,
  styled,
  Button,
} from "@nextui-org/react";
import Head from "next/head";
import MainNavbar from "../components/MainNavbar";
import terraLogo from "../public/terra.svg";
import Image from "next/image";
import Fyra from "../public/fyra.svg";
import UM from "../public/um.svg";

const Divider = styled("hr", {
  width: "100%",
  height: "1px",
  border: "none",
  backgroundColor: "$gray200",
  margin: "0",
});

const LogoImage = styled(Image, {
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
  },
  transition: "opacity 0.2s ease-in-out",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Terra</title>

        <meta property="og:title" content="Terra" />
        <meta property="og:url" content="https://terra.fyralabs.com/" />
        <meta
          property="og:description"
          content="A high quality repository for Fedora and other RPM-based distros, containing all the software you need."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/terra.png" />
        <meta
          name="description"
          content="A high quality repository for Fedora and other RPM-based distros, containing all the software you need."
        />
      </Head>
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          gap: "$12",
          maxW: 750,
        }}
      >
        {/* <MainNavbar /> */}

        <Row
          css={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={terraLogo} alt="Terra Logo" width={150} />

          <Text
            css={{
              lineHeight: "$xs",
            }}
            size="$8xl"
            weight="hairline"
          >
            Terra
          </Text>
        </Row>

        <Divider />

        <Row
          css={{
            textAlign: "center",
            mw: "750px",
            "@smMax": {
              textAlign: "initial",
            },
          }}
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "$9",
            }}
          >
            <Text
              h1
              css={{
                lineHeight: "$sm",
                margin: 0,
                "@smMax": {
                  fontSize: "$4xl",
                },
              }}
            >
              A modern repository for the
              <br /> packages Fedora doesn&apos;t ship.
            </Text>

            <Text css={{ textAlign: "center" }}>
              Finally, a repository for all the software you need. With Terra,
              you can install the latest packages knowing that quality and
              security are assured. Terra is also a great way to easily
              distribute your software to users of Fedora and RPM-based
              distributions.
            </Text>

            <Snippet
              css={{
                "@sm": {
                  mx: "auto",
                },
                width: "min-content",
                bg: "$accents0",
                px: "$5",
                py: "$3",
              }}
            >
              sudo dnf config-manager --add-repo{" "}
              <Link
                css={{ display: "inline", color: "$primary" }}
                href="https://terra.fyralabs.com/terra.repo"
              >
                https://terra.fyralabs.com/terra.repo
              </Link>
            </Snippet>
            <Text color="warning" small>
              Practice caution before running any commands on your system.
            </Text>

            <Button
              css={{
                width: "100%",
                maxW: 300,
                mx: "auto",
              }}
              as="a"
              href="https://github.com/terrapkg/packages"
            >
              Contribute
            </Button>
          </Col>
        </Row>

        <Divider />

        <Row
          css={{
            justifyContent: "center",
            gap: "$10",
          }}
        >
          <a href="https://fyralabs.com">
            <LogoImage alt="Fyra Labs Logo" src={Fyra} width={128} />
          </a>
          <a href="https://ultramarine-linux.org/">
            <LogoImage alt="Ultramarine Linux Logo" src={UM} width={128} />
          </a>
        </Row>
      </Container>
    </>
  );
}

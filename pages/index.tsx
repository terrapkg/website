import {
  Container,
  Text,
  styled,
  Button,
  Spacer,
  Grid,
  Card,
} from "@nextui-org/react";
import Head from "next/head";
import MainNavbar from "../components/MainNavbar";
import Image from "next/image";
import InstallModal from "../components/InstallModal";
import { useState } from "react";

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
  const [showInstallModal, setShowInstallModal] = useState(false);

  return (
    <>
      <InstallModal
        visible={showInstallModal}
        closeHandler={() => setShowInstallModal(false)}
      />
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
      <Container>
        <MainNavbar />

        <Spacer y={2} />

        <Container display="flex" alignItems="center" direction="column">
          <Text
            h1
            css={{
              textAlign: "center",
            }}
            size="$6xl"
          >
            The{" "}
            <Text
              css={{
                textGradient: "45deg, $blue600 -20%, $blue700 50%",
              }}
              span
            >
              5,302
            </Text>{" "}
            packages that Fedora won&rsquo;t ship.
          </Text>
          <Text
            css={{
              textAlign: "center",
              maxW: 750,
              mw: "auto",
            }}
            size="$md"
          >
            A repository for all the software you need. With Terra, you can
            install the latest packages knowing that quality and security are
            assured. Terra is also a great way to distribute your software on
            Fedora and RPM-based distributions.
          </Text>

          <Spacer y={1} />

          <Container display="flex" css={{ gap: "$sm" }} justify="center">
            <Button onClick={() => setShowInstallModal(true)}>Install</Button>
            <Button flat color="secondary">
              Contribute
            </Button>
          </Container>
        </Container>

        <Spacer y={2} />

        <Grid.Container gap={2} justify="center">
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Modern
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  Terra is built on the Andaman toolchain, our modern meta
                  buildsystem for packages. This simpilifies the process of
                  maintaining packages, even at a large scale. Written in Rust,
                  it is blazing fast and easy to use.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Current
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  Tired of waiting for updates? Us too. Packages on Terra are
                  automtically updated as soon as they are released upstream, on
                  a 30 minute interval. And for those living on the edge, we
                  offer nightly packages as well.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Quality
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  Packages on Terra are built by a team of experienced
                  maintainers. Additionally, package submissions are carefully
                  vetted and assessed against our guidelines. This ensures that
                  a high quality of packages is maintained.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Transparent
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  Long gone are the days of external buildsystems and scattered
                  repos. All package sources are availiable within a single
                  repository. This makes it easy to track down issues and report
                  bugs. Additionally, all build jobs are publically viewable on
                  GitHub Actions.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Ease of Use
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  For users, Terra is as easy to use as any other repository.
                  And for developers, Terra is a breeze to work with. We work
                  directly with other projects to meet their needs and make
                  Terra as seemless as possible.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card>
              <Card.Header>
                <Text b size="$xl">
                  Secure
                </Text>
              </Card.Header>
              <Card.Body>
                <Text>
                  All packages on Terra are built in a secure environment
                  maintained by the Fyra Labs team. Through our modern tooling,
                  transparent infrastructure, and careful review process, we
                  ensure that all packages are safe to use.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        {/* <Row
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
                href="htthttps://terra.fyralabs.com/terra.repo"
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
        </Row> */}
      </Container>
    </>
  );
}

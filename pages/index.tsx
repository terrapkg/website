import {
  Snippet,
  Card,
  Col,
  Container,
  Row,
  Text,
  Link,
} from "@nextui-org/react";
import MainNavbar from "../components/MainNavbar";

export default function Home() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainNavbar />

      <Row
        css={{
          my: "auto",
          textAlign: "center",
          mw: "750px",
          mx: "auto",
          "@smMax": {
            textAlign: "initial",
          },
        }}
      >
        <Col
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$7",
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

          <Text>
            Finally, a repository for all the software you need. With Terra, you
            can install the latest packages knowing that quality and security
            are assured. And for project maintainers, Terra is a great way to
            easily distribute your software to users of Fedora and RPM-based
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
            curl{" "}
            <Link
              css={{ display: "inline", color: "$primary" }}
              href="https://terra.fyralabs.com/get.sh"
            >
              https://terra.fyralabs.com/get.sh
            </Link>{" "}
            | sh
          </Snippet>
        </Col>
      </Row>
    </Container>
  );
}

import { Link, Modal, Snippet, styled, Text } from "@nextui-org/react";
import { FC } from "react";

const SnippetPadder = styled("div", {
  display: "inline-block",
  py: "$5",
});

const InstallModal: FC<{
  visible: boolean;
  closeHandler: () => void;
}> = ({ visible, closeHandler }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      closeButton
      open={visible}
      onClose={closeHandler}
      blur
    >
      <Modal.Header>
        <Text id="modal-title" size={18} weight="medium">
          Install Terra
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>
          Copy the following command and paste it into your terminal to install
          Terra.
        </Text>
        <Snippet
          css={{
            "@sm": {
              mx: "auto",
            },
            width: "min-content",
            px: "$5",
            py: "$3",
            button: {
              alignItems: "center",
            },
          }}
        >
          <SnippetPadder>
            sudo dnf config-manager --add-repo{" "}
            <Link
              css={{ display: "inline", color: "$primary" }}
              href="htthttps://terra.fyralabs.com/terra.repo"
            >
              https://terra.fyralabs.com/terra.repo
            </Link>
          </SnippetPadder>
        </Snippet>
      </Modal.Body>
      <Modal.Footer justify="center">
        <Text
          color="warning"
          small
          css={{
            textAlign: "center",
          }}
        >
          Practice caution before running any commands on your system.
        </Text>
      </Modal.Footer>
    </Modal>
  );
};

export default InstallModal;

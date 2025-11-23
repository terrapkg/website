import { Button } from "@/components/ui/button";

type BaseButtonProps = Parameters<typeof Button>[0];
type ButtonProps = Omit<BaseButtonProps, "asChild">; // it wouldn't make sense to pass asChild to Link

interface LinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  href,
  target,
  rel,
  children,
  ...props
}: LinkProps) {
  return (
    <Button asChild {...props}>
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    </Button>
  );
}

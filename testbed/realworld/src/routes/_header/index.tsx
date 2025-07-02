import type { FC } from "react";
import { AuthorizedHeader } from "./authorized";
import { UnauthorizedHeader } from "./unauthorized";

const getUser = async (): Promise<string | null> => {
  // TODO!
  return null;
};

export const Header: FC = async () => {
  const user = await getUser();
  if (!user) {
    return <UnauthorizedHeader />;
  }
  return <AuthorizedHeader />;
};

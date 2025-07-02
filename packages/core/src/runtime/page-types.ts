import type { FC, PropsWithChildren } from "react";

export type PageProps = {};
export type Page = FC<PageProps>;

export type LayoutProps = PropsWithChildren<{}>;
export type Layout = FC<LayoutProps>;

export type RootProps = PropsWithChildren<{}>;
export type RootElement = FC<RootProps>;

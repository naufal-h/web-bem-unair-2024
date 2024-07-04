import { EmotionCache } from "@emotion/react";
import { PropsWithChildren, ComponentType, ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type LayoutProps = PropsWithChildren<{
    className?: string;
    meta?: Record<string, unknown>;
    name?: string;
    route?: RouteProps;
  }>;
  export type Layout = ComponentType<LayoutProps>;
  export type LayoutWrapperProps = PropsWithChildren<{
    emotionCache?: EmotionCache;
    layout?: LayoutProps;
    route?: RouteProps;
  }>;
  export interface Layouts {
    get: (key: string) => Layout | undefined;
    has: (key: string) => boolean;
    layouts: ReadonlyMap<string, Layout>;
    names: readonly string[];
    register: (layouts: Record<string, Layout>) => void;
  }
  export type NavigationBadge = ReactNode | {
    className?: string;
    color?: string;
    content: ReactNode;
    pill?: boolean;
  };
  export interface NavigationSection {
    action?: string;
    auth?: boolean;
    badge?: NavigationBadge;
    className?: string;
    section: ReactNode;
    subject?: string;
    title?: string;
  }
  export interface NavigationLink {
    action?: string;
    auth?: boolean;
    badge?: NavigationBadge;
    className?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: ReactNode;
    id: string;
    link: string;
    subject?: string;
    text: string;
    title?: string;
    children?: readonly (NavigationGroup | NavigationItem | NavigationLink)[];
  }
  export interface NavigationItem {
    action?: string;
    auth?: boolean;
    className?: string;
    content: ReactNode;
    subject?: string;
  }
  export interface NavigationGroup extends Omit<NavigationLink, 'external' | 'link'> {
    children?: readonly (NavigationGroup | NavigationItem | NavigationLink)[];
  }
  export type Navigation = NavigationGroup | NavigationItem | NavigationLink | NavigationSection;
  
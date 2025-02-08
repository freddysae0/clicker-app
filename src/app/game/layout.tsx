import { Metadata } from "next";
import TemplateMetadata from '@/utils/metadata'

type LayoutProps = {
    children: Readonly<React.ReactNode>;
}


export const metadata: Metadata = {
    ...TemplateMetadata,
    title: 'Egg Cracker - Game'
};

export default function GameLayout({ children }: LayoutProps): React.ReactNode {
    return (<div >{children}</div>)
}


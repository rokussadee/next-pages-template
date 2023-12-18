export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
	],
	links: {
		github: "https://github.com/rokussadee",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};

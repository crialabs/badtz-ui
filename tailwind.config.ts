import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			cardForeground: 'hsl(var(--card-foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			popoverForeground: 'hsl(var(--popover-foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primaryForeground: 'hsl(var(--primary-foreground))',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			secondaryForeground: 'hsl(var(--secondary-foreground))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			mutedForeground: 'hsl(var(--muted-foreground))',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			accentForeground: 'hsl(var(--accent-foreground))',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			doc: {
  				DEFAULT: 'hsl(var(--doc-background))',
  				background: 'hsl(var(--doc-background))'
  			},
  			'doc-background': 'hsl(var(--doc-background))',
  			destructiveForeground: 'hsl(var(--destructive-foreground))',
  			border: 'hsl(var(--border))',
  			'secondary-border': 'hsl(var(--secondary-border))',
  			third: 'hsl(var(--third))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart1: 'hsl(var(--chart-1))',
  			chart2: 'hsl(var(--chart-2))',
  			chart3: 'hsl(var(--chart-3))',
  			chart4: 'hsl(var(--chart-4))',
  			chart5: 'hsl(var(--chart-5))',
  			sidebarBackground: 'hsl(var(--sidebar-background))',
  			sidebarForeground: 'hsl(var(--sidebar-foreground))',
  			sidebarPrimary: 'hsl(var(--sidebar-primary))',
  			sidebarPrimaryForeground: 'hsl(var(--sidebar-primary-foreground))',
  			sidebarAccent: 'hsl(var(--sidebar-accent))',
  			sidebarAccentForeground: 'hsl(var(--sidebar-accent-foreground))',
  			sidebarBorder: 'hsl(var(--sidebar-border))',
  			sidebarRing: 'hsl(var(--sidebar-ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				'muted-foreground': 'hsl(var(--sidebar-muted-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Geist Sans',
  				'sans-serif'
  			],
  			mono: [
  				'Geist Mono',
  				'monospace'
  			],
  			gilroy: [
  				'var(--font-gilroy)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			spotlight: {
  				'0%': {
  					transform: 'translateX(-50%) rotate(var(--rotate, 0deg)) scale(var(--scale, 1))'
  				},
  				'50%': {
  					transform: 'translateX(-50%) rotate(calc(var(--rotate, 0deg) * 1.2)) scale(calc(var(--scale, 1) * 1.1))'
  				},
  				'100%': {
  					transform: 'translateX(-50%) rotate(var(--rotate, 0deg)) scale(var(--scale, 1))'
  				}
  			},
  			'vertical-scroll': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'collapsible-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-collapsible-content-height)'
  				}
  			},
  			'collapsible-up': {
  				from: {
  					height: 'var(--radix-collapsible-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'border-beam': {
  				'0%': {
  					'offset-distance': '0%'
  				},
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'border-beam-reverse': {
  				'0%': {
  					'offset-distance': '100%'
  				},
  				'100%': {
  					'offset-distance': '0%'
  				}
  			},
  			'cloud-orbit': {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'25%': {
  					transform: 'rotate(90deg) translateY(calc(var(--radius) * 1px)) rotate(-90deg)'
  				},
  				'50%': {
  					transform: 'rotate(180deg) translateY(calc(var(--radius) * 1px)) rotate(-180deg)'
  				},
  				'75%': {
  					transform: 'rotate(270deg) translateY(calc(var(--radius) * 1px)) rotate(-270deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			},
  			'infinite-ribbon': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'infinite-ribbon-reverse': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'swipe-button-text': {
  				'0%': {
  					backgroundPosition: '0 0'
  				},
  				'100%': {
  					backgroundPosition: 'var(--swipe-button-text-width) 0'
  				}
  			},
  			'marquee-left': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-right': {
  				from: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			},
  			handshake: {
  				'0%, 100%': {
  					transform: 'rotate(0deg)'
  				},
  				'25%': {
  					transform: 'rotate(-4deg)'
  				},
  				'75%': {
  					transform: 'rotate(4deg)'
  				}
  			},
  			'star-btn': {
  				'0%': {
  					'offset-distance': '0%'
  				},
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'meteor-effect': 'meteor 5s linear infinite',
  			'star-btn': 'star-btn calc(var(--duration)*1s) linear infinite',
  			'infinite-ribbon': 'infinite-ribbon var(--ribbon-duration) linear infinite',
  			'infinite-ribbon-reverse': 'infinite-ribbon-reverse var(--ribbon-duration) linear infinite',
  			'cloud-orbit': 'cloud-orbit calc(var(--speed)*1s) linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) linear infinite',
  			'border-beam-reverse': 'border-beam-reverse calc(var(--duration)*1s) linear infinite',
  			spotlight: 'spotlight var(--duration, 8s) infinite',
  			'vertical-scroll': 'vertical-scroll var(--duration) linear infinite',
  			'collapsible-down': 'collapsible-down 0.2s ease-out',
  			'collapsible-up': 'collapsible-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'swipe-button-text': 'swipe-button-text 1.5s cubic-bezier(.4,0,.2,1) infinite',
  			'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
  			'marquee-right': 'marquee-right var(--duration, 30s) linear infinite',
  			handshake: 'handshake 0.3s ease-in-out',
  			'gradient-x': 'gradient-x 8s ease infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

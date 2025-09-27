import { ReactNode } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

type AnimatedTextProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	stagger?: number;
	as?: keyof JSX.IntrinsicElements;
};

// Splits text nodes into words for nicer staggered reveals.
function splitIntoWords(children: ReactNode): ReactNode[] {
	if (typeof children === "string") {
		return children.split(/(\s+)/).filter(Boolean).map((chunk, idx) => (
			<span key={idx} className={chunk.trim() ? "inline-block" : undefined}>{chunk}</span>
		));
	}
	return [children];
}

export default function AnimatedText({
	children,
	className,
	delay = 0,
	stagger = 0.04,
	as = "div",
}: AnimatedTextProps) {
	const Tag = as as any;
	const items = splitIntoWords(children);

	return (
		<LazyMotion features={domAnimation} strict>
			<Tag className={className}>
				<m.span
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.6 }}
					variants={{
						hidden: {},
						show: {
							transition: { staggerChildren: stagger, delayChildren: delay },
						},
					}}
					className="inline-block"
				>
					{items.map((item, index) => (
						<m.span
							key={index}
							variants={{
								hidden: { y: "0.6em", opacity: 0 },
								show: {
									y: "0em",
									opacity: 1,
									transition: { type: "spring", stiffness: 350, damping: 30 }
								},
							}}
							className="will-change-transform"
						>
							{item}
						</m.span>
					))}
				</m.span>
			</Tag>
		</LazyMotion>
	);
}



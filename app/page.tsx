import { Card, CardBody } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"
import Image from "next/image"

/*
	Create a Card for our linktree to live in
	Create a next/image
	Create some chips ( TypeScript, YouTuber, Programmer )
	Create a text description of user
	Create cards for each user link
*/

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card shadow="lg">
				<CardBody>
					<div className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image 
								src="/profilepic.webp"
								width={200}
								height={200}
								alt="Studio pub pp"
								className="justify-center rounded-lg border-large"
							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold">@StudioPubBelem</h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip
								variant="shadow"
								color="primary"
								size="sm"
							>
								Bar
							</Chip>
							<Chip
								variant="shadow"
								color="primary"
								size="sm"
							>
								Pizaria 
							</Chip>
							<Chip
								variant="shadow"
								color="primary"
								size="sm"
							>
								Shows 
							</Chip>
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-lg text-center font-semibold">
								Live a Real Rock Experience with Us!
							</p>
						</div>
						<div className="flex flex-col justify-center gap-4 pt-4">
							<a href="https://www.bilheteriadigital.com/studio-pub-rock-festival-celebration-day-09-de-dezembro" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Ingressos para o Celebration day</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://www.bilheteriadigital.com/tarja-turunem-e-marko-hietala-17-de-marco" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Ingressos para Tarja Turunen e Marko Hietala</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://www.bilheteriadigital.com/the-calling-18-de-maio" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Ingressos The Calling</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://studiopubrockfestival.lojavirtualnuvem.com.br/" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Loja Virtual</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://www.sympla.com.br/produtor/studiopub" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Venda de ingressos Online</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://www.getinapp.com.br/belem/studio-pub-presidente-pernambuco" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Reserva - Presidente Pernambuco</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://www.getinapp.com.br/belem/studio-pub-bras-de-aguiar" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Reserva - Rodídio (São Brás e Umarizal) </h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://drive.google.com/file/d/1aq-xU1RFm1BAhGwWNTHSw3JSEV6v3TUo/view?usp=drive_link" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Menu / Cardapio</h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://drive.google.com/file/d/17jmIz51r9xxcztwSz5GRq0X1TTZeBmVb/view?usp=share_link" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Menu / Cardápio (English) </h3>
									</CardBody>
								</Card>
							</a>
							<a href="https://cardapiodigital.io/f402eb0a-2bd3-4c91-8e1a-916c5ed5e1f2" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Ifood / Delivery </h3>
									</CardBody>
								</Card>
							</a>
							<a href="http://www.spub.com.br/" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">Website</h3>
									</CardBody>
								</Card>
							</a>
						</div>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}

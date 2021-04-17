export const allLayers = [
	{
		bg: 'bg-remoto',
		postSpace: 30,
		central: {
			src: `B_1`, pos: {top: 151, left: 0, delay: 10}
		},
		text:
			[
				{text: `Comunicação Assíncrona & `, class: `remoto1`, pos: {top: 150, left: 350, delay: 20}},
				{text: ` Trabalho Remoto`, class: `remoto2`, pos: {top: 550, left: 350, delay: 20}}
			],
		secondary:
			[
				{src: `B_3`, pos: {top: 150, left: 0, delay: 30}},
				{src: `B_2`, pos: {top: 150, left: 0, delay: 30}}
			]
	},
	{
		bg: 'bg-psico',
		postSpace: 300,
		central: {
			src: `C_1`, pos: {top: 280, left: 0, delay: 10}
		},
		text:
			[
				{text: `Segurança`, class: `psico1`, pos: {top: 151, left: 350, delay: 20}},
				{text: `Psicológica`, class: `psico2`, pos: {top: 256, left: 350, delay: 20}}
			],
		secondary:
			[
				{src: `C_2`, pos: {top: 440, left: -180, delay: 30}},
				{src: `C_3`, pos: {top: 190, left: 190, delay: 30}},
			]
	},
	{
		bg: 'bg-timezone',
		postSpace: 30,
		central: {
			src: `A_1`, pos: {top: 390, left: -14, delay: 10}
		},
		text:
			[
				{text: `Fazendo as\npazes\ncom `, pre: true, class: `timezone1`, pos: {top: 260, left: 370, delay: 20}},
				{text: `timezone`, class: `timezone2`, pos: {top: 474, left: 190, delay: 20}}
			],
		secondary:
			[
				{src: `A_3`, pos: {top: 185, left: -160, delay: 30}},
				{src: `A_2`, pos: {top: 125, left: 0, delay: 30}, isPrincipal: true}
			]
	},
	{
		bg: 'bg-code',
		postSpace: 30,
		central: {
			src: `centralbook`, pos: {top: 450, left: 0, delay: 10}
		},
		text:
			[
				{text: `Introdução à Infraestrutura como`, class: `code1`, pos: {top: 100, left: 370, delay: 20}},
				{text: `Código`, class: `code2`, pos: {top: 314, left: 130, delay: 20}}
			],
		secondary:
			[
				{src: `D_3_`, pos: {top: 0, left: 0, delay: 30}},
			]
	},
	{
		bg: 'bg-cto',
		postSpace: 30,
		central: {
			src: `F_1`, pos: {top: 535, left: 330, delay: 10}
		},
		text:
			[
				{
					text: 'O que faz um CTO?', class: `cto1`, pos: {top: 150, left: 350, delay: 20}
				},
				{
					text: 'CTO', class: `cto2`, pos: {top: 342, left: 350, delay: 20}
				}
			],
		secondary:
			[
				{src: `F_3`, pos: {top: 144, left: 20, delay: 30}},
				{src: `F_2`, pos: {top: 250, left: -70, delay: 30}}
			]
	},
	{
		bg: 'bg-gatlin',
		postSpace: 300,
		central: {
			src: `E_1`, pos: {top: 20, left: -180, delay: 10}
		},
		text:
			[
				{text: `Testes de carga com Gatlin`, class: `gatlin1`, pos: {top: 120, left: 350, delay: 20}},
			],
		secondary:
			[
				{src: `E_3`, pos: {top: 450, left: 250, delay: 30}},
				{src: `E_2`, pos: {top: 322, left: 50, delay: 30}, isPrincipal: true}
			]
	},
	{
		bg: 'bg-timezone',
		postSpace: 30,
		central: {
			src: `centralrocket`, pos: {top: 80, left: 0, delay: 10}
		},
		text:
			[
				{
					text: `Gestão de despesas em computação na nuvem`, class: `rocket1`, pos: {top: 135, left: 350, delay: 20}
				},
				{text: `para equipes financeiras`, class: `rocket2`, pos: {top: 580, left: 350, delay: 20}}
			],
		secondary:
			[
				{src: `rocket`, pos: {top: 4, left: 0, delay: 30}},
			]
	},
]
//mobile
export const allLayersMobile = [
	{
		bg: 'bg-remoto',
		central: {
			src: `centralwoo`, pos: {top: 45, left: 0, delay: 10}
		},
		text:
			[
				{text: `Comunicação Assíncrona & `, class: `remoto1`, pos: {top: 119, left: 150, delay: 20}},
				{text: ` Trabalho Remoto`, class: `remoto2`, pos: {top: 437, left: 150, delay: 20}}
			],
		secondary:
			[
				{src: `B_3`, pos: {top: 190, left: 0, delay: 30}},
				{src: `B_2`, pos: {top: 0, left: 0, delay: 30}}
			]
	},
	{
		bg: 'bg-psico',
		central: {
			src: `centralbrain`, pos: {top: 150, left: 0, delay: 10}
		},
		text:
			[
				{text: `Segurança`, class: `psico1`, pos: {top: 100, left: 150, delay: 20}},
				{text: `Psicológica`, class: `psico2`, pos: {top: 147, left: 150, delay: 20}}
			],
		secondary:
			[
				{src: `C_2`, pos: {top: 40, left: -4, delay: 30}},
				{src: `C_5`, pos: {top: 40, left: 38, delay: 30}}
			]
	},
	{
		bg: 'bg-timezone',
		central: {
			src: `A_1`, pos: {top: '46', left: -13, delay: 10}
		},
		text:
			[
				{text: `Fazendo as \npazes \ncom`, pre: true, class: `timezone1`, pos: {top: 136, left: 150, delay: 20}},
				{text: `timezone`, class: `timezone2`, pos: {top: 440, left: 90, delay: 20}}
			],
		secondary:
			[
				{src: `A_3`, pos: {top: '90', left: 0, delay: 30}},
				{src: `Saly`, pos: {top: '90', left: 0, delay: 30}}
			]
	},
	{
		bg: 'bg-code',
		central: {
			src: `centralbook`, pos: {top: 240, left: 0, delay: 10}
		},
		text:
			[
				{text: `Introdução à Infraestrutura como`, class: `code1`, pos: {top: 80, left: 150, delay: 20}},
				{text: `Código`, class: `code2`, pos: {top: 190, left: 30, delay: 20}}
			],
		secondary:
			[
				{src: `D_3`, pos: {top: 100, left: -5, delay: 30}},
			]
	},
	{
		bg: 'bg-cto',
		central: {
			src: `centralphone`, pos: {top: 240, left: 0, delay: 10}
		},
		text:
			[
				{
					text: 'O que faz um CTO?', class: `cto1`, pos: {top: 100, left: 150, delay: 20}
				},
				{
					text: 'CTO', class: `cto2`, pos: {top: '154', left: 79, delay: 20}
				}
			],
		secondary:
			[
				{src: `F_3`, pos: {top: 0, left: 0, delay: 30}},
				{src: `F_1`, pos: {top: -30, left: -50, delay: 30}}
			]
	},
	{
		bg: 'bg-gatlin',
		central: {
			src: `centraldon`, pos: {top: 350, left: -20, delay: 10}
		},
		text:
			[
				{text: `Testes de carga com Gatlin`, class: `gatlin1`, pos: {top: 140, left: 150, delay: 20}},
			],
		secondary:
			[
				{src: `E_3`, pos: {top: 150, left: -150, delay: 30}},
				{src: `E_2`, pos: {top: 50, left: 200, delay: 30}}
			]
	},
	{
		bg: 'bg-timezone',
		central: {
			src: `centralrocket`, pos: {top: '140', left: '00', delay: 10}
		},
		text:
			[
				{
					text: `Gestão de despesas em computação na nuvem`, class: `rocket1`, pos: {top: '100', left: 150, delay: 20}
				},
				{text: `para equipes financeiras`, class: `rocket2`, pos: {top: '480', left: 150, delay: 20}}
			],
		secondary:
			[
				{src: `rocket`, pos: {top: 44, left: 0, delay: 30}},
			]
	},
]


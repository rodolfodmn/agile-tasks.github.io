export const allLayers = [
	{
		bg: 'bg-remoto',
		central: {
			src: `B_1`, pos: {top: 5, left: 34, delay: 10}
		},
		text:
			[
				{text: `Comunicação Assíncrona & `, class: `remoto1`, pos: {top: '137', left: '-371', delay: 20}},
				{text: ` Trabalho Remoto`, class: `remoto2`, pos: {top: '525', left: '-371', delay: 20}}
			],
		secondary:
			[
				{src: `B_3`, pos: {top: -35, left: -28, delay: 30}},
				{src: `B_2`, pos: {top: -50, left: 0, delay: 30}}
			]
	},
	{
		bg: 'bg-psico',
		central: {
			src: `C_1`, pos: {top: '50', left: -26, delay: 10}
		},
		text:
			[
				{text: `Segurança`, class: `psico1`, pos: {top: '140', left: '-371', delay: 20}},
				{text: `Psicológica`, class: `psico2`, pos: {top: '227', left: '-371', delay: 20}}
			],
		secondary:
			[
				{src: `C_2`, pos: {top: '50', left: -26, delay: 30}},
				{src: `C_3`, pos: {top: '50', left: -26, delay: 30}},
			]
	},
	{
		bg: 'bg-timezone',
		central: {
			src: `A_1`, pos: {top: '54', left: -6, delay: 10}
		},
		text:
			[
				{text: `Fazendo as pazes com `, class: `timezone1`, pos: {top: '286', left: '-371', delay: 20}},
				{text: `timezone`, class: `timezone2`, pos: {top: '500', left: '-194', delay: 20}}
			],
		secondary:
			[
				{src: `A_3`, pos: {top: '54', left: -6, delay: 30}},
				{src: `A_2`, pos: {top: '54', left: -6, delay: 30}}
			]
	},
	{
		bg: 'bg-code',
		central: {
			src: `D_1`, pos: {top: '-30', left: -122, delay: 10}
		},
		text:
			[
				{text: `Introdução à Infraestrutura como`, class: `code1`, pos: {top: '80', left: '-371', delay: 20}},
				{text: `Código`, class: `code2`, pos: {top: '295', left: '-136', delay: 20}}
			],
		secondary:
			[
				{src: `D_3_`, pos: {top: '-20', left: 50, delay: 30}},
			]
	},
	{
		bg: 'bg-cto',
		central: {
			src: `F_1`, pos: {top: -78, left: 0, delay: 10}
		},
		text:
			[
				{
					text: 'O que faz um CTO?', class: `cto1`, pos: {top: '150', left: '-371', delay: 20}
				},
				{
					text: 'CTO', class: `cto2`, pos: {top: '342', left: '-371', delay: 20}
				}
			],
		secondary:
			[
				{src: `F_3`, pos: {top: 34, left: 20, delay: 30}},
				{src: `F_2`, pos: {top: -40, left: 80, delay: 30}}
			]
	},
	{
		bg: 'bg-gatlin',
		central: {
			src: `E_1`, pos: {top: 0, left: 22, delay: 10}
		},
		text:
			[
				{text: `Testes de carga com Gatlin`, class: `gatlin1`, pos: {top: '80', left: '-371', delay: 20}},
			],
		secondary:
			[
				{src: `E_3`, pos: {top: 50, left: 50, delay: 30}},
				{src: `E_2`, pos: {top: 50, left: 50, delay: 30}}
			]
	},
	{
		bg: 'bg-timezone',
		central: {
			src: `centralrocket`, pos: {top: 140, left: 0, delay: 10}
		},
		text:
			[
				{
					text: `Gestão de despesas em computação na nuvem`, class: `rocket1`, pos: {top: 100, left: -371, delay: 20}
				},
				{text: `para equipes financeiras`, class: `rocket2`, pos: {top: 480, left: -371, delay: 20}}
			],
		secondary:
			[
				{src: `rocket`, pos: {top: 44, left: 40, delay: 30}},
			]
	},
]

export const allLayersMobile = [
	{
		bg: 'bg-remoto',
		central: {
			src: `centralwoo`, pos: {top: 45, left: 0, delay: 10}
		},
		text:
			[
				{text: `Comunicação Assíncrona & `, class: `remoto1`, pos: {top: 119, left: -160, delay: 20}},
				{text: ` Trabalho Remoto`, class: `remoto2`, pos: {top: 437, left: -160, delay: 20}}
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
				{text: `Segurança`, class: `psico1`, pos: {top: 100, left: -160, delay: 20}},
				{text: `Psicológica`, class: `psico2`, pos: {top: 147, left: -160, delay: 20}}
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
				{text: `Fazendo as \npazes \ncom `, pre: true, class: `timezone1`, pos: {top: '136', left: '-160', delay: 20}},
				{text: `timezone`, class: `timezone2`, pos: {top: '450', left: '-80', delay: 20}}
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
				{text: `Introdução à Infraestrutura como`, class: `code1`, pos: {top: '80', left: '-150', delay: 20}},
				{text: `Código`, class: `code2`, pos: {top: 190, left: '-36', delay: 20}}
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
					text: 'O que faz um CTO?', class: `cto1`, pos: {top: '100', left: '-150', delay: 20}
				},
				{
					text: 'CTO', class: `cto2`, pos: {top: '154', left: '-84', delay: 20}
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
				{text: `Testes de carga com Gatlin`, class: `gatlin1`, pos: {top: 140, left: '-166', delay: 20}},
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
					text: `Gestão de despesas em computação na nuvem`, class: `rocket1`, pos: {top: '100', left: '-150', delay: 20}
				},
				{text: `para equipes financeiras`, class: `rocket2`, pos: {top: '480', left: '-150', delay: 20}}
			],
		secondary:
			[
				{src: `rocket`, pos: {top: 44, left: 0, delay: 30}},
			]
	},
]


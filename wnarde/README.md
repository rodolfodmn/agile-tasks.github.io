## wnarde-front
o front hoje está sendo atulaizado com o meu "fake json"
ele só coloca o conteudo das páginas de post, dentro da tag:
	```html 
		<div id="post" class="post-body" includeHtml="">
		</div>
	```

mas você pode colocar qualquer coisa nessa tag, e usar o method "content.showContent()",
para exibir qualquer coisa e manter o banner atual como topo.

para mostrar um conteudo sem um banner de topo como é o caso da pagina de about, 
você poder usar o method "content.showFullContent()", assim você consegue exibir conteudo 
dentro da tag do post sem um banner no topo.

para voltar a exibição dos banners é só usar o method "content.showBanners()"



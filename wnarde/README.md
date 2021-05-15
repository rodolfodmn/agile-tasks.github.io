### wnarde-front
o front hoje está sendo atulaizado com o meu "fake json"
ele só coloca o conteudo das páginas de post, dentro da tag:

mas você pode colocar qualquer coisa nessa tag, e usar o method "content.showContent()",
para exibir qualquer coisa e manter o banner atual como topo.

para mostrar um conteudo sem um banner de topo como é o caso da pagina de about, 
você poder usar o method "content.showFullContent()", assim você consegue exibir conteudo 
dentro da tag do post sem um banner no topo.

para voltar a exibição dos banners é só usar o method "content.showBanners()"

##tags
- *tag-post: fica na tag main do index.html, recebe o conteudo do post
	```html 
		<div id="post" class="post-body" includeHtml="">
		</div>
	```
	- recebe o conteudo do post
	- com o fake-ajax ativado, ele printa o arquivo html ques estiver na prop "includeHtml"
	
##paginas/posts
- ./post/psico.html
- ./post/gatlin.html
- ./post/timezone.html
- ./post/wnarde.html
	
##./app/js/main.js:
###esse arquivo inicia os js que usei no layout


##./app/js/content.js:
###esse arquivo gerencia o que é exibido na tela
- a variavel "useFake" :
	* indica se vai ser usado o fake-ajax que eu fiz pra poder exibir os posts
- contemt.showBanners() : 
  	* tem que ser chamado quando for esconder o post, e exibir os banners
- content.showContent() : 
	* mostra conteudo carregado na *tag-post
- content.showFullPageContent() :
	*  mostrar post sem banner no topo, usada para exibir a page "about"


##./app/js/fake-ajax.js:
###esse arquivo gerencia as posts que são exibidas, usando o banner atual


##./app/js/banner/config.js:
###esse arquivo configura o conteudo dos bannes dinamicos

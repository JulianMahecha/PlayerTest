# MoviesApp - VueJS

Componentes:
- Se han desarrollado tres componentes principales, uno para cada categoria de peliculas que se desee buscar. Cada uno de estos componentes realiza una solicitud a la API de TMDB por medio de Axios, para alimentar la vista y generar un contenido reactivo que cambiara cuando cambie en el servidor. Cada componente por si solo es indpendiente, permitiendo esto que al fallo de uno, los demas componentes no se vean afectados.


Despliegue:

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

Posterior a realizar la compilacion necesaria por medio de los utilities de Node, la aplicación podra ser usada sin ningun inconveniente con el comando npm run dev, esta se ejecutara en el servidor local, desde el puerto 8080.
```

#Principio de responsabilidad unica:
- El principio de responsabilidad única hace referencia al “quehacer” de un objeto dentro de la programación, específicamente refiriéndose a que un objeto debe realizar una única cosa. Esto evitando que una sola clase tenga diversas responsabilidades lógicas a la vez.

#El Código limpio:

Un código limpio debe cumplir con todos los estándares necesarios para garantizar la abstracción de sus componentes y el correcto funcionamiento de cada uno de los objetos contenidos en este.
El código debe estar “segmentado” en pequeñas unidades de código, esto para simplificar la comprensión del código y potenciar su mantenibilidad, claro, cada unidad realizando un único trabajo. 
Los comentarios son importantes, siempre y cuando aporten valor adicional a la comprensión del código.
Lo mas importante, NO TE REPITAS, es decir, no escribas el mismo código varias veces, pues esto significa mayor cantidad de pruebas, mayor tiempo para la modificación del código y una mantenibilidad por debajo de las expectativas.

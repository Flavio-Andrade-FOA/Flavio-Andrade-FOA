# librarytestslink
# orientacao objetos


S, de Single responsibility principle, princípio da responsabilidade única. O que isso significa? Significa que cada módulo, cada classe, cada método, só tem que ter um motivo para mudar, para sofrer alterações, para executar código.

O, de SOLID, significa open/closed principle, ou seja, o princípio do aberto/fechado. É um nome meio esquisito, mas aberto e fechado nesse caso, significa que a classe tem que estar aberta para ser expandida, porém fechada, para ser modificada. Ou seja, a ideia nesse caso, é que seja possível adicionar funcionalidades em uma classe, mas não alterar métodos de uma classe que já existem e que já estão em funcionamento ou alterar essas classes mesmo.

L, de Liskov substitution principle, o princípio da substituição de Liskov. Liskov é Barbara Liskov, uma cientista da computação, que foi quem pensou, quem primeiro formalizou isso que chamamos de princípio de substituição. Então, é porque o princípio é dela, e não porque a Barbara Liskov vai ser substituída.

I de SOLID é interface segregation principle, que é o princípio de segregação de interface. Então, esse princípio diz que clientes não devem ser forçados a depender de interfaces que eles não usam. Vamos dar uma explicada, sem utilizar interfaces. Basicamente, esse princípio diz que não podemos impor uma implementação de uma coisa que não vai ser necessária. Por exemplo, eu, Juliana, sou vegetariana, então minha classe Juliana não utilizaria métodos, por exemplo, que envolvam carne, todos os métodos que envolvem carne na classe Juliana são desnecessários.

D, é o dependency inversion principle, que é o princípio da inversão de dependência. Ou seja, digamos que módulos que estão em um nível mais acima da hierarquia de classes, não podem depender de nada que está abaixo deles, e também diz que nenhum deles podem depender de implementações, e sim, de abstrações. Como explicamos isso?
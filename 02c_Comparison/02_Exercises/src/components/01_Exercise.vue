<!--
Aufgabe: Lehrbetriebe suchen
Analysieren Sie eine Variante (Method, Computed Prop, Watcher) der Suche in Demo 02c_Comparison.
Entscheiden Sie sich, welche Sie nachfolgend umsetzen möchten:
a. Erstellen Sie zwei Data-Properties eingabe (Typ String) und filterList (Typ Array of Strings)
b. Erstellen Sie input-Element (Typ text) und binden Sie das Element an das Data-Property eingabe
c. Geben Sie die die Elemente der filterList als HTML List-Items aus.
d. Erstellen Sie eine Variante der Suche, welche Lehrbetriebe filtert und ausgibt.
-->
<template>
  <div>
    <h1>Mediamatiker Lehrbetriebe</h1>
    <div class="container">
      <div class="col">
        <h3>Lehrbetrieb suchen</h3>
        <!--b.-->
        <ul>
          <!--c.-->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Lehrbetriebe: [
        'Swisscom', 'SwissRe', 'ETH', 'UPC',
        'UBS', 'Creditsuisse', 'ZKB', 'Lush', 'Johnson&Johnson'
      ],
      //a.
    }
  },
  //d.
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.col {
  margin-bottom: 2rem;
  width: 50%;
  height: 100%;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>

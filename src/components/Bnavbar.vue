<template>
  <div>
    <b-navbar toggleable="md" type="navbar navbar-expand-md navbar-dark bg-dark" variant="info">
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Inicio</b-navbar-brand>
      
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav align="start">
          <b-nav-item :to="{name: 'alcalde'}" active-class>Alcalde</b-nav-item>
          <b-nav-item :to="{name: 'gore'}" active-class>GORE</b-nav-item>
          <b-nav-item :to="{name: 'diputado'}" active-class>Diputado</b-nav-item>
          <b-nav-item :to="{name: 'senador'}" active-class>Senador</b-nav-item>
          <b-nav-item :to="{name: 'usuario'}" active-class>Usuario Común</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </div>

</template>

<script>

  export default{
    name: 'Bnavbar',
  }
</script>

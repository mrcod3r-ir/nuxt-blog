<template>
  <div>
    <h2>Slots</h2>
    <b-card title="Slots" tag="article" class="mb-2 mt-5">
      <h4>styles</h4>
      <b-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam!
      </b-card-text>
      <TrainingSlotDialog>
        <h2 class="text-pinky">color applied outter component</h2>
        <p class="text-pinky">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam minima
          laborum repudiandae voluptatem laudantium possimus nobis vitae, aut
          itaque delectus ullam est ratione, iusto, necessitatibus in harum vero
          veritatis officiis. Ad odio itaque voluptatem, architecto tempore
          corrupti eaque laborum magni.
        </p>
      </TrainingSlotDialog>
      <TrainingSlotDialog>
        <h2>color applied inner component</h2>
        <p>
          some content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Enim, quasi!
        </p>
      </TrainingSlotDialog>
      <h4>named slots</h4>
      <TrainingSlotDialog>
        <template #namedContent>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              nihil.
            </p>
          </div>
        </template>
      </TrainingSlotDialog>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Slots',
  layout: 'training'
}
</script>

<style lang="scss" scoped>
.text-pinky {
  color: pink;
}
</style>

<template>
  <div class="card time-picker" style="height: auto;">
    <header class="card-header is-primary">
      <div class="card-header-title time-picker-title">
        <div class="time-picker-title__time">
          <span class="time-picker__title__btn" :class="{ active: selectingHour }">{{inputHour}}</span>
          <span>:</span>
          <span class="time-picker__title__btn" :class="{ active: !selectingHour }">{{inputMinute}}</span>
        </div>
        <div class="time-picker-title__ampm">
          <div class="time-picker__title__btn" :class="{ active: period == 'am' }">am</div>
          <div class="time-picker__title__btn" :class="{ active: period == 'pm' }">pm</div>
        </div>
      </div>
    </header>
      <div class="picker__body" style="width: 290px;">
        <div class="time-picker-clock__container" style="width: 290px; height: 290px;">
          <div class="time-picker-clock time-picker-clock--indeterminate" style="height: 270px; width: 270px;">
            <div class="time-picker-clock__hand" style="transform: rotate(0deg) scaleY(0.97037);"></div>
            <span class="active" style="transform: translate(0px, -108px);">
              <span>12</span>
            </span>
            <span class="" style="transform: translate(54px, -93px);">
              <span>1</span>
            </span>
            <span class="" style="transform: translate(93px, -54px);">
              <span>2</span>
            </span>
            <span class="" style="transform: translate(108px, 0px);">
              <span>3</span>
            </span>
            <span class="" style="transform: translate(93px, 54px);">
              <span>4</span>
            </span>
            <span class="" style="transform: translate(54px, 93px);">
              <span>5</span>
            </span>
            <span class="" style="transform: translate(0px, 108px);">
              <span>6</span>
            </span>
            <span class="" style="transform: translate(-54px, 93px);">
              <span>7</span>
            </span>
            <span class="" style="transform: translate(-93px, 54px);">
              <span>8</span>
            </span>
            <span class="" style="transform: translate(-108px, 0px);">
              <span>9</span>
            </span>
            <span class="" style="transform: translate(-93px, -54px);">
              <span>10</span>
            </span>
            <span class="" style="transform: translate(-54px, -93px);">
              <span>11</span>
            </span>
          </div>
        </div>
      </div>
    <!-- <div class="picker__title primary">
      <div class="time-picker-title">
        <div class="time-picker-title__time">
          <div class="picker__title__btn active">--</div>
          <span>:</span>
          <div class="picker__title__btn">--</div>
        </div>
        <div class="time-picker-title__ampm">
          <div class="picker__title__btn active">am</div>
          <div class="picker__title__btn">pm</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import createRange from '../util/helpers'

// const hoursRange = createRange(12)
// const minutesRange = createRange(60)

export default {
  data () {
    return {
      inputHour: '02',
      inputMinute: '18',
      period: 'am',
      selectingHour: true,
      isDragging: false
    }
  },
  props: {
    value: String,
    min: String,
    max: String,
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].includes(val)
      }
    }
  },
  methods: {
    euclidean (p0, p1) {
      const dx = p1.x - p0.x
      const dy = p1.y - p0.y

      return Math.sqrt(dx * dx + dy * dy)
    },
    angle (center, p1) {
      const value = 2 * Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x)
      return Math.abs(value * 180 / Math.PI)
    }
  }
}
</script>

<style>

</style>

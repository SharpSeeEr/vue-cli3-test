<template>
  <div class="card time-picker" style="height: auto;">
    <header class="card-header is-primary">
      <div class="card-header-title time-picker-title">
        <div class="time-picker-title__time">
          <span class="time-picker__title__btn"
            :class="{ active: selectingHour }"
            @click="selectingHour = true">{{hourValue}}</span>
          <span>:</span>
          <span class="time-picker__title__btn"
            :class="{ active: !selectingHour }"
            @click="selectingHour = false">{{minuteValue}}</span>
        </div>
        <div class="time-picker-title__ampm">
          <div class="time-picker__title__btn"
            :class="{ active: period == 'am' }"
            @click="period = 'am'">am</div>
          <div class="time-picker__title__btn"
          :class="{ active: period == 'pm' }"
            @click="period = 'pm'">pm</div>
        </div>
      </div>
    </header>
      <div class="picker__body" :style="{ width: size + 'px' }">
        <div class="time-picker-clock__container" :style="{ width: size + 'px', height: size + 'px' }">
          <div class="time-picker-clock"
            ref="clock"
            @mousedown="onMouseDown"
            @mouseup="onMouseUp"
            @mousemove="onDragMove"
            @touchstart="onMouseDown"
            @touchend="onMouseUp"
            @touchmove="onDragMove">
            <div class="time-picker-clock__hand" :style="getHandRotation()"></div>
            <span v-for="num in numberList"
              :key="num"
              :style="getTransform(num)"
              :class="getClockNumberClass(num)">
              <span>{{num}}</span>
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
import { createRange } from '../util/helpers'

const hoursRange = createRange(13).slice(1)
const minutesRange = createRange(60 / 5).map(m => m * 5)

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
    size: {
      type: Number,
      default: 290
    },
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].includes(val)
      }
    }
  },
  computed: {
    radius () {
      return this.size / 2
    },
    innerRadius () {
      return this.radius - Math.max(this.radius * 0.4, 48)
    },
    outerRadius () {
      return this.radius - 4
    },
    clockNumberCount () {
      return this.selectingHour ? 12 : 60
    },
    degreesPerUnit () {
      return 360 / this.clockNumberCount
    },
    degrees () {
      return this.degreesPerUnit * Math.PI / 180
    },
    displayedValue () {
      return this.value == null ? this.min : this.value
    },
    numberList () {
      return this.selectingHour ? hoursRange : minutesRange
    },
    hourValue () {
      return parseInt(this.inputHour)
    },
    minuteValue () {
      return parseInt(this.inputMinute)
    },
    activeValue () {
      return parseInt(this.value.split(':')[this.selectingHour ? 0 : 1])
    },
    formattedTime () {
      return `${this.inputHour}:${this.inputMinute} ${this.period}`
    },
    handRotate () {
      return this.activeValue * this.degreesPerUnit
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
    },
    getHandRotation () {
      return { transform: `rotate(${this.handRotate}deg)` }
    },
    getTransform (i) {
      const { x, y } = this.getPosition(i)
      return { transform: `translate(${x}px, ${y}px)` }
    },
    getPosition (value) {
      const radius = this.radius - 36
      return {
        x: radius * Math.sin(value * this.degrees),
        y: radius * -Math.cos(value * this.degrees)
      }
    },
    getClockNumberClass (value) {
      return { 'active': value === this.activeValue }
    },
    formatClockNumber (value) {
      return value === 0 && this.selectingHour ? 12 : value
    },
    onMouseDown (e) {
      e.preventDefault()

      this.isDragging = true
      this.onDragMove(e)
    },
    onMouseUp () {
      this.isDragging = false
      this.$emit('change', this.formattedTime)
      this.selectingHour = !this.selectingHour
    },
    onDragMove (e) {
      e.preventDefault()
      if (!this.isDragging && e.type !== 'click') return

      const { width, top, left } = this.$refs.clock.getBoundingClientRect()
      console.log(width, top, left)
      const { clientX, clientY } = 'touches' in e ? e.touches[0] : e
      console.log(clientX, clientY)
      const center = { x: width / 2, y: -width / 2 }
      console.log(center)
      const coords = { x: clientX - left, y: top - clientY }
      console.log(coords)
      const handAngle = Math.round(this.angle(center, coords)) % 360
      console.log('handRotate: ', this.handRotate, 'handAngle: ', handAngle)
      const insideClick = this.euclidean(center, coords) < (this.outerRadius + this.innerRadius) / 2 - 16
      console.log(insideClick)
      const value = Math.round(handAngle / this.degreesPerUnit)
      console.log(this.degreesPerUnit, value)
      // Necessary to fix edge case when selecting left part of max value
      if (handAngle >= (360 - this.degreesPerUnit / 2)) {
        this.update(this.selectingHour ? 12 : 0)
      } else {
        this.update(value)
      }
    },
    update (value) {
      console.log('updating value: ', value)
      if (this.activeValue !== value) {
        if (this.selectingHour) {
          this.inputHour = value
        } else this.inputMinute = value

        this.$emit('input', this.formattedTime)
      }
    }
  }
}
</script>

<style>

</style>

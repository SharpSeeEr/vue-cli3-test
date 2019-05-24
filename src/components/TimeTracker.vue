<template>

  <body>
    <div class="columns">
      <!-- <div class="column">

      </div>
      <div class="column">

      </div>
      <div class="column">

      </div> -->
      <div class="column">
        <b-field>
          <b-input placeholder="Task" v-model="current.task"></b-input>
        </b-field>
      </div>
      <div class="column is-narrow">
        <div class="time-display">{{ elapsed }}</div>
      </div>

      <div class="column is-narrow">
        <div v-show="!current.start">
          <button class="button is-success" @click="start" :disabled="!current.task || current.task.length < 5">
            <!-- <i class="fas fa-play"></i> -->
            <b-icon icon="play"></b-icon>
          </button>
        </div>
        <div v-show="current.start">
          <button class="button" @click="stop">
            <b-icon icon="stop"></b-icon>
          </button>
        </div>
      </div>
    </div>

    <b-table :data="tasks" :columns="columns" :row-class="(row, index) => row.id === 1 && 'is-info'">
    </b-table>

  </body>
</template>

<script>
import moment from 'moment'
import MomentDurationFormat from 'moment-duration-format' // eslint-disable-line

export default {
  data () {
    return {
      current: {
        task: '',
        start: null,
        stop: null
      },
      elapsed: '00:00:00',
      interval: null,
      tasks: [],
      columns: [
        {
          field: 'task',
          label: 'Entry Name'
        },
        {
          field: 'start',
          label: 'Start'
        },
        {
          field: 'stop',
          label: 'Stop',
          centered: true
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    start () {
      console.log('starting!')
      this.current.start = moment()
      this.interval = window.setInterval(() => this.updateElapsed(), 1000)
    },
    stop () {
      console.log('stopping!')
      this.current.stop = moment()
      this.tasks.push(this.current)
      this.current = {
        task: '',
        start: null,
        stop: null
      }
      window.clearInterval(this.interval)
      this.interval = null
      this.updateElapsed()
    },
    updateElapsed () {
      if (!this.current.start) this.elapsed = '00:00:00'
      else if (!this.current.stop) {
        let d = moment.duration(moment().diff(this.current.start))
        this.elapsed = d.format('hh:mm:ss', { trim: false }) //  `${d.hours()}:${d.minutes()}:${d.seconds()}`
      }
    }

  }
}
</script>

<style>
.time-display {
  text-align: right;
  font-size: 36px;
  line-height: 36px;
}
.actions {
  padding: 10px 0;
}
</style>

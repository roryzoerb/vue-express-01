<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <app-panel title='Songs'>
        <!-- <div slot='greeting'>
          <h2>Hello</h2>
        </div>
        <div slot='message'>
          <p>This is my message</p>
        </div> -->
        <div v-for='song in songs' v-bind:key='song.id'>
          <h5>{{song.title}}</h5>
          <p>{{song.artist}}</p>
          <p>{{song.album}}</p>
        </div>
      </app-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import AppPanel from '@/components/layout/AppPanel'
export default {
  components: {
    'app-panel': AppPanel
  },
  data () {
    return {
      songs: null,
      // songs: [
      //   {
      //     id: 1,
      //     title: 'Title One',
      //     artist: 'Artist One',
      //     album: 'Ablum One'
      //   },
      //   {
      //     id: 2,
      //     title: 'Title Two',
      //     artist: 'Artist Two',
      //     album: 'Ablum Two'
      //   },
      //   {
      //     id: 3,
      //     title: 'Title Three',
      //     artist: 'Artist Three',
      //     album: 'Ablum Three'
      //   }
      // ],
      error: null
    }
  },
  methods: {
    dismissError () {
      this.error = null
    }
  },
  async mounted () {
    this.songs = await SongService.index()
  }
}
</script>

<style scoped>

</style>

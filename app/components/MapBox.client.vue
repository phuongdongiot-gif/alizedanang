<template>
  <div class="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
    <div ref="mapContainer" class="absolute inset-0 w-full h-full bg-gray-100"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  zoom: { type: Number, default: 13 },
  markerHtml: { type: String, default: '<div class="w-8 h-8 rounded-full bg-yellow-500 border-4 border-white shadow-lg flex items-center justify-center shrink-0"></div>' }
})

const mapContainer = ref(null)
let map = null
let marker = null

onMounted(() => {
  // Replace with a valid public API key in production, or read from useRuntimeConfig
  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN' // Token removed for repository push protection
  
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/light-v11', // luxury minimal style
    center: [props.lng, props.lat],
    zoom: props.zoom,
    scrollZoom: false
  })

  // Add navigation control
  map.addControl(new mapboxgl.NavigationControl(), 'top-right')

  // Create custom marker element
  const el = document.createElement('div')
  el.innerHTML = props.markerHtml
  
  marker = new mapboxgl.Marker(el.firstChild)
    .setLngLat([props.lng, props.lat])
    .addTo(map)
})

watch(() => [props.lat, props.lng], ([newLat, newLng]) => {
  if (map && marker) {
    map.flyTo({ center: [newLng, newLat], zoom: props.zoom })
    marker.setLngLat([newLng, newLat])
  }
})

onUnmounted(() => {
  if (map) map.remove()
})
</script>

<style>
/* Any mapbox overrides can go here */
.mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
  display: none !important;
}
</style>

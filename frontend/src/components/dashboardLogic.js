// src/components/dashboardLogic.js
import { reactive, ref } from 'vue';

export const dropdowns = reactive({
  profilowanie: false,
  choroby: false,
  pomoc: false
});

export const posts = ref([
  {
    user: 'Anna',
    avatar: 'https://via.placeholder.com/50',
    content: 'Cześć wszystkim!',
    time: '5 minut temu'
  },
  {
    user: 'Marek',
    avatar: 'https://via.placeholder.com/50',
    content: 'Czy ktoś zna dobre grupy wsparcia w Krakowie?',
    time: '15 minut temu'
  }
]);

export function show(name) {
  dropdowns[name] = true;
}

export function hide(name) {
  dropdowns[name] = false;
}

export function onClick(action) {
  console.log('Kliknięto:', action);
}

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo-brainwahve.svg'
const hasEmailError = ref(false)
const hasPasswordError = ref(false)
const email = ref('')
const password = ref('')
const emailErrorMessage = ref('')
const passwordErrorMessage = ref('')

function validateEmail(event) {
  if (!email.value.trim().length) {
    hasEmailError.value = true
    emailErrorMessage.value = 'Email can not be blank.'
  } else {
    hasEmailError.value = false
    emailErrorMessage.value = ''
  }
}

function validatePassword(event) {
  if (!email.value.trim().length) {
    hasPasswordError.value = true
    passwordErrorMessage.value = 'Password can not be blank.'
  } else {
    hasPasswordError.value = false
    passwordErrorMessage.value = ''
  }
}

function submitHandler(event) {
  event.preventDefault()
}
</script>

<template>
  <div
    class="flex flex-col mx-[20px] sm:mx-auto mt-auto mb-auto h-full pb-[40px] md:pb-0 font-sans"
  >
    <div>
      <img :src="logo" alt="brainwahve logo" class="h-[100px] mx-auto mb-[25px]" />
      <h1 class="text-center text-[24px] text-[#000000DE]">Sign in to your account</h1>
      <form @submit="submitHandler" class="flex flex-col w-full max-w-[500px] mx-auto mt-[36px]">
        <div className="text-left mb-[20px]">
          <label class="text-gray-800 text-[17px] capitalize mb-[20px]">
            email
            <input
              @blur="validateEmail"
              v-model="email"
              type="email"
              placeholder="email@website.com"
              :class="[
                hasEmailError
                  ? 'text-error-900 border-error-800 focus:border-error-800'
                  : 'text-gray-800 border-lightgray-900 focus:border-primary-800',
                'block border-solid border  py-[12px] px-[16px] text-[14px] rounded w-full mt-[6px] focus:bg-[#EBE4EA80]'
              ]"
            />
          </label>

          <span v-if="hasEmailError" class="text-[10px] text-error-900 ml-[16px] absolute">
            {{ emailErrorMessage }}
          </span>
        </div>
        <div class="text-left mb-[20px]">
          <label class="text-left text-gray-800 text-[17px] capitalize">
            password
            <input
              @blur="validatePassword"
              v-model="password"
              type="password"
              :class="[
                hasPasswordError
                  ? 'text-error-900 border-error-800 focus:border-error-800'
                  : 'text-gray-800 border-lightgray-900 focus:border-primary-800',
                'block border-solid border  py-[12px] px-[16px] text-[14px] rounded w-full mt-[6px] focus:bg-[#EBE4EA80]'
              ]"
            />
          </label>
          <span v-if="hasPasswordError" class="text-[10px] text-error-900 ml-[16px] absolute">
            {{ passwordErrorMessage }}
          </span>
        </div>

        <button
          type="submit"
          class="capitalize font-medium text-primary-800 text-[14px] rounded-full bg-primary-50 hover:bg-primary-800 hover:text-[#FFF] py-[12px] w-full"
        >
          sign in
        </button>
      </form>
      <div class="mt-[36px] text-center">
        <p class="text-gray-800">
          Having trouble logging in?
          <a href="#" class="text-primary-800 font-medium"> reset your password </a>
        </p>
        <p class="text-gray-800">
          Don't have an account?
          <a href="#" class="text-primary-800 font-medium"> create an account </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<template>
  <div class="relative w-dvw h-auto flex flex-col items-center overflow-y-scroll overflow-x-hidden">
    <div class="w-dvw lg:w-[900px] flex flex-col items-center">
      <LazyHeaderDesktop />
      <LazyHeaderMobile />
    </div>
    <slot />
    <div class="w-dvw lg:w-[900px]">
      <FooterGroup />
    </div>
    <ModalLeaveCounter />
  </div>
</template>

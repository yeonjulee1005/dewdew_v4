<template>
  <div :class="['class']">
    <ContentSlot :use="$slots.default" />
  </div>
</template>

<style lang="scss" scoped>
.content-card {
  font-family: 'Source Code Pro', 'Pretendard Variable';

  ::v-deep(h3) {
    color: #a5a7fc;
    font-size: 36px;
    font-weight: bold;
    padding: 14px 8px;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #6366f1;
    }
  }

  ::v-deep(h4) {
    color: #4649e5;
    font-size: 24px;
    font-weight: bold;
    padding: 14px 8px;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #6366f1;
    }
  }

  ::v-deep(h5) {
    font-size: 20px;
    font-weight: 600;
    padding: 14px 8px;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #6366f1;
    }
  }

  ::v-deep(p) {
    width: 100%;
    font-size: 18px;
    line-height: 1.5em;
    word-break: keep-all;
    padding: 10px 8px;

    a {
      text-decoration: underline;
      color: #4649e5;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #a5a7fc;
      }
    }

    span {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: gray;
    }

    code {
      font-family: 'Hack Nerd Font Mono';
      padding: 4px 6px;
      margin: 0 4px;
      border-radius: 6px;
      border: 1px solid #a5a7fc;
      font-size: 16px;
      transition: border 0.2s ease-in-out;
      &:hover {
        border: 1px solid #6366f1;
      }
    }
  }

  ::v-deep(ol) {
    margin: 10px 42px;
    li {
      list-style-type: decimal;
    }
  }

  ::v-deep(ul) {
    margin: 10px 42px;
    li {
      list-style-type: disc;
    }
  }

  ::v-deep(blockquote) {
    width: 100%;
    padding: 10px 8px;
    margin: 10px 20px;
    border-left: 6px solid #4649e5;
  }

  ::v-deep(code) {
    font-family: 'Hack Nerd Font Mono';
  }

  ::v-deep(pre) {
    background-color: #f0f0f0;
    padding: 8px 14px;
    margin: 0 4px;
    overflow: clip;
    border-radius: 6px;
    code {
      color: #6366f1;
      font-size: 16px;
      font-family: 'Hack Nerd Font Mono';
    }
  }

  ::v-deep(hr) {
    width: 100%;
    margin: 20px 0;
    height: 20px;
    border: none;
    background-image: var(--zigzag-pattern);
    background-repeat: repeat-x
  }

  ::v-deep(img) {
    object-fit: cover;
    border-radius: 12px;
  }
}

.menu-list {
  font-family: 'Source Code Pro', 'Pretendard Variable';
  font-size: 20px;
  font-weight: bold;
  padding: 0 8px;
  color: #4649e5;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #a5a7fc;
  }
}

.content-image {
  margin: 10px 0;
  ::v-deep(img) {
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>

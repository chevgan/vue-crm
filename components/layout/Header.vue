<template>
  <header class="header">
    <LayoutLogo />
    <div class="header__buttons-container">
      <button class="header__button_settings">
        <Icon name="uil:setting" size="24" />
        <span>Settings</span>
      </button>
      <button class="header__button_notifications">
        <Icon
          name="material-symbols:notifications-unread-outline-sharp"
          size="24"
        />
      </button>
      <button class="header__button_notifications">
        <Icon name="material-symbols:person-outline-sharp" size="24" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 33px;
}

.header__buttons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.header__button_settings {
  display: flex;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border: none;
  border-radius: $border-radius-card;
  cursor: pointer;
  gap: 8px;
  transform: translateY(0);
  transition: all 250ms ease;
  &:hover {
    background: #f0f0f0;
    transform: translateY(-3px);
  }
}

.header__button_notifications {
  background: white;
  padding: 10px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  transform: translateY(0);
  transition: all 250ms ease;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-3px);
  }
}
</style>

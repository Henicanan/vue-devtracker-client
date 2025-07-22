<script setup lang="ts">
const emit = defineEmits(["cancel", "submit"]);

const handleChangePassword = () => {
  emit("submit", {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
};

const handleCancel = () => {
  emit("cancel");
};
</script>

<template>
  <NModal preset="card" title="Смена пароля" style="width: 400px">
    <NForm label-placement="left" label-width="140">
      <NFormItem label="Текущий пароль">
        <NInput type="password" placeholder="Введите текущий пароль" />
      </NFormItem>
      <NFormItem label="Новый пароль">
        <NInput type="password" placeholder="Введите новый пароль" />
      </NFormItem>
      <NFormItem label="Подтвердите пароль">
        <NInput type="password" placeholder="Повторите новый пароль" />
      </NFormItem>
    </NForm>
    <template #footer>
      <NSpace justify="end">
        <NButton @click="handleCancel">Отмена</NButton>
        <NButton type="primary" @click="handleChangePassword"
          >Изменить пароль</NButton
        >
      </NSpace>
    </template>
  </NModal>
</template>

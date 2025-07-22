<script setup lang="ts">
import { NButton, NForm, NFormItem, NInput, NGrid, NGridItem } from 'naive-ui';
import type { ProfileUser } from '../model/types';

interface Props {
  user: ProfileUser;
  isEditing: boolean;
}

interface Emits {
  (e: 'update:isEditing', value: boolean): void;
  (e: 'save'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const toggleEditing = () => {
  emit('update:isEditing', !props.isEditing);
};

const handleSave = () => {
  emit('save');
};
</script>

<template>
  <div class="profile-tab">
    <div class="section-header">
      <h2>Личная информация</h2>
      <NButton
        :type="isEditing ? 'default' : 'primary'"
        @click="toggleEditing"
      >
        {{ isEditing ? "Отменить" : "Редактировать" }}
      </NButton>
    </div>

    <NForm
      :model="user"
      :disabled="!isEditing"
      label-placement="left"
      label-width="120"
      require-mark-placement="right-hanging"
    >
      <NGrid :cols="2" :x-gap="24" :y-gap="16">
        <NGridItem>
          <NFormItem label="Имя" path="firstName">
            <NInput
              v-model:value="user.firstName"
              placeholder="Введите имя"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Фамилия" path="lastName">
            <NInput
              v-model:value="user.lastName"
              placeholder="Введите фамилию"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Email" path="email">
            <NInput
              v-model:value="user.email"
              placeholder="Введите email"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Телефон" path="phone">
            <NInput
              v-model:value="user.phone"
              placeholder="Введите телефон"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Должность" path="position">
            <NInput
              v-model:value="user.position"
              placeholder="Введите должность"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Отдел" path="department">
            <NInput
              v-model:value="user.department"
              placeholder="Введите отдел"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Компания" path="company">
            <NInput
              v-model:value="user.company"
              placeholder="Введите компанию"
            />
          </NFormItem>
        </NGridItem>
        <NGridItem>
          <NFormItem label="Дата приема" path="joinDate">
            <NInput
              v-model:value="user.joinDate"
              placeholder="Выберите дату"
            />
          </NFormItem>
        </NGridItem>
      </NGrid>

      <div v-if="isEditing" class="form-actions">
        <NButton type="primary" @click="handleSave">
          Сохранить изменения
        </NButton>
      </div>
    </NForm>
  </div>
</template>

<style lang="scss" scoped>
.profile-tab {
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111;
    }
  }

  .form-actions {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eaeaea;
  }
}
</style> 
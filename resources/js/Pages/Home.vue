<template>
  <layout>
    <div class="flex flex-col items-center p-8">
      <ApolloMutation :mutation="$options.mutations.triggerTestSubscription">
        <template v-slot="{ mutate }">
          <button @click="mutate" class="p-2 bg-purple-500 text-white rounded">Trigger test subscription</button>
        </template>
      </ApolloMutation>

      <div class="p-8">
        <label>Random number:</label> <span>{{ randomNumber }}</span>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/Shared/Layout';
import gql from 'graphql-tag';

export default {
  name: 'Home',
  components: { Layout },
  data() {
    return {
      randomNumber: null,
    };
  },
  mutations: {
    triggerTestSubscription: gql`
      mutation TriggerTestSubscription {
        triggerTestSubscription
      }
    `,
  },
  apollo: {
    $subscribe: {
      subscribed: {
        query: gql`
          subscription Test {
            test
          }
        `,
        result({ data }) {
          this.randomNumber = data.test;
        },
      },
    },
  },
};
</script>

<style scoped></style>

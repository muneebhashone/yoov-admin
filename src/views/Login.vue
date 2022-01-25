<template>
  <div class="login-box-container">
    <div class="login-box">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" align-self="center">
              <v-btn large elevation="2" block class="login-btn">Login</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    valid: false,
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style scoped>
.login-box {
  width: 600px;
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.login-box-container {
  height: calc(100vh - 58px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-btn {
  background-color: #2b425e !important;
  color: white !important;
}
</style>

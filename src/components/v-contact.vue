<template>
  <div>
    <h2>Contact</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta
      itaque cumque aut autem voluptas hic totam consectetur aliquid, ipsam
      excepturi tempora. Fugit minus nesciunt sint, illo magni labore
      voluptatibus?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
      praesentium quam aut reprehenderit voluptatem voluptates, dolorem omnis
      molestias dolores porro hic ad nesciunt tempora necessitatibus assumenda
      obcaecati neque ipsum aperiam?
    </p>

    <div class="contact_form">
      <form @submit.prevent="submit" class="form">
        <label for="name" :class="$v.name.$error ? 'is-invalid' : ''">
          Name
          <input
            type="text"
            id="name"
            class="input_errors"
            v-model="$v.name.$model"
          />
          <span class="errors" v-if="!$v.name.required">Field is required</span>
          <span class="errors" v-if="!$v.name.minLength"
            >Name must have at least
            {{ $v.name.$params.minLength.min }} letters</span
          >
        </label>

        <label for="email" :class="$v.email.$error ? 'is-invalid' : ''">
          Email
          <input
            type="text"
            id="email"
            class="input_errors"
            v-model="$v.email.$model"
          />
          <span class="errors" v-if="!$v.email.required"
            >Field is required</span
          >
          <span class="errors" v-if="!$v.email.email"
            >Please enter correct email</span
          >
        </label>

        <label for="message" :class="$v.message.$error ? 'is-invalid' : ''">
          Message
          <textarea 
          type="textarea" 
          class="input_errors"
          id="message" 
          v-model="$v.message.$model"
          ></textarea>
            <span class="errors" v-if="!$v.message.required"
            >Field is required</span
          >
        </label>
        <label for="subscribe" class="checkbox">
          Subscribe
          <input type="checkbox" id="subscribe" name="type" v-model="check" />
        </label>
        <el-button
          type="primary"
          class="button"
          @click="onSubmit"
          :disabled="submitStatus === 'PENDING'"
          >Submit</el-button
        >

        <p class="typo__p status_ok" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="typo__p status_error" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "vContact",
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      check: "",
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    message:{
      required,
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
<style lang="less">
.contact_form {
  max-width: 800px;
  margin: 50px auto 0;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: flex-start;

  input {
    width: 100%;
    height: 30px;
    margin: 5px 0 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding-left: 10px;
    box-sizing: border-box;
    &:focus {
      border: 1px solid #409eff;
      outline: #409eff;
    }
  }
}
.checkbox {
  flex-direction: row;
  align-items: center;
  input {
    width: 5%;
    height: 20px;
    margin-left: 5px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
}
textarea {
  width: 100%;
  min-height: 150px;
  margin: 5px 0 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #409eff;
    outline: #409eff;
  }
}
.typo__p {
  margin-top: 10px;
}
.errors {
  display: none;
}
.is-invalid {
  .input_errors {
    border: 1px solid red;
    border-radius: 5px;
  }
  .errors {
    color: red;
    display: block;
  }
}
.status_ok {
  color: green;
}
.status_error {
  color: red;
}
</style>
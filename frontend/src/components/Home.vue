 <template>
  <div>
    <div class="row">
      <div class="col col-12 offset-0 mt-2">
        <h1 class="jumbotron text-center text-white bg-primary">
          URL Shortener
        </h1>
      </div>
    </div>

    <div class="col col-8 align-middle mt-5 offset-2">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="submit(url)">
            <div class="form-group">
              <label for="url">Enter URL</label>
              <textarea
                type="url"
                class="form-control"
                v-model="url"
                style="height: 150px"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Shorten URL</button>
            </div>
            <ul>
              <li v-for="item in allLinks" :key="item">
                {{ item }}
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import axios from "axios";
export default {
  name: "Home",
  props: {},
  data: () => {
    return {
      url: "",
      shortUrl: "",
      allLinks: [],
    };
  },
  mounted: async function () {
    const list = "http://localhost:3000/list";
    const listResponse = await axios.get(list);

    const result = listResponse.data.map((element) => {
      return `https://pbid.io/${element.shortUrlCode}`;
    });
    console.log("RESULT", result);
    this.allLinks = result;
  },
  methods: {
    submit: async function (url) {
      try {
        const api = "http://localhost:3000/url";
        await axios.post(api, {
          fullUrl: url,
        });
        const list = "http://localhost:3000/list";
        const listResponse = await axios.get(list);

        const result = listResponse.data.map((element) => {
          return `https://pbid.io/${element.shortUrlCode}`;
        });
        console.log("RESULT", result);
        this.allLinks = result;
      } catch (error) {
        console.log(error);
      }
      this.url = "";
    },
  },
};
</script>

import type { FundaApiResource, FundaListing } from "@/types/funda-listing"
import { ref, type Ref } from "vue"

export function useFundaListing(id: string) {
  // This composable is meant to only fetch a single time.
  const data: Ref<FundaListing> = ref({} as FundaListing)
  const loading = ref(true)
  const error = ref(undefined)

  async function fetchApi() {
    try {
      const response = await fetch(buildUrl(id))
      data.value = parseData(await response.json())
    } catch (e: any) {
      // @todo I'd propagate the error to an error handler
      console.error(e)
      error.value = e
    } finally {
      loading.value = false
    }
  }

  fetchApi()

  return { data, error, loading }
}

function parseData(data: FundaApiResource): FundaListing {
  console.log(data)
  return {
    price: getCurrency(data.KoopPrijs),
    images: getImages(data["Media-Foto"]),
    address: data.Adres,
    url: data.URL,
  }
}

function getCurrency(amount: number): string {
  return Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount)
}

function getImages(images: Array<string>): Array<string> {
  // @todo No solution as permanent as a temporary solution!
  // I'd probably use the api resource's "Media" attribute to properly do this
  return images.map((str) => str.replace("klein", "grotere"))
}

function buildUrl(id: string): string {
  // I had some CORS issues loading the API through localhost.
  // I needed to create a proxy to be able to fetch the resource.
  return `${import.meta.env.VITE_HEROKU_CORS_PROXY}${
    import.meta.env.VITE_FUNDA_API_URL
  }/json/detail/${import.meta.env.VITE_FUNDA_API_KEY}/koop/${id}/`
}

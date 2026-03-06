| Scenario                                                           | Will it fetch automatically?                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `staleTime` expired, component still mounted, no `refetchInterval` | **No**, unless `refetchOnWindowFocus` triggers or you manually call `refetch`. |
| `staleTime` expired, component remounts, cached data stale         | **Yes**, automatic refetch on mount.                                           |
| `staleTime` not expired, component remounts                        | **No**, data is fresh, no automatic refetch.                                   |
| `cacheTime` expired                                                | **Yes**, next mount triggers fetch (because cache is gone).                    |
| `refetchInterval` set                                              | **Yes**, query will poll at the interval even if data is fresh.                |

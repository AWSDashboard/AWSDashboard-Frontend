import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { ProtectedLayout } from 'app/components/privateLayout'
import { View, Text, Pressable } from 'react-native'
import { useRouter, useSearchParams } from 'solito/navigation'

export function s3Screen() {
  const router = useRouter()
  const params = useSearchParams()
  return (
    <ProtectedLayout>
      <Card>
        <Button variant="submit" onPress={() => {}}>
          <Text>S3</Text>
        </Button>
      </Card>
    </ProtectedLayout>
  )
}

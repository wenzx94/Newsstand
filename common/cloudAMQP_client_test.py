from cloudAMQP_client import CloudAMQPClient

# TODO: use your own queue url.
CLOUDAMQP_URL = "amqp://xbheisai:1C8n03BW_P3I99ZVow9mwaNBKP5rIe-w@mosquito.rmq.cloudamqp.com/xbheisai"
NEWS_FETCH_TASK_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, NEWS_FETCH_TASK_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print 'test_basic passed.'

if __name__ == "__main__":
    test_basic()
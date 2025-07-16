import { Button, Card } from '@monorepo/ui'

export default function ComponentsDemo() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">共享组件演示</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="按钮组件">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Primary 按钮</h4>
              <Button variant="primary" size="md">
                主要按钮
              </Button>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Secondary 按钮</h4>
              <Button variant="secondary" size="md">
                次要按钮
              </Button>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Danger 按钮</h4>
              <Button variant="danger" size="md">
                危险按钮
              </Button>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">不同尺寸</h4>
              <div className="space-x-2">
                <Button variant="primary" size="sm">小</Button>
                <Button variant="primary" size="md">中</Button>
                <Button variant="primary" size="lg">大</Button>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="卡片组件">
          <p className="text-gray-600 mb-4">
            这是一个使用共享Card组件的示例。Card组件支持不同的内边距大小。
          </p>
          
          <Card title="嵌套卡片" padding="sm" className="bg-gray-50">
            <p className="text-sm text-gray-600">
              这是一个嵌套在另一个卡片中的小卡片。
            </p>
          </Card>
        </Card>
        
        <Card title="交互示例" padding="lg">
          <div className="space-y-4">
            <p className="text-gray-600">
              点击下面的按钮查看交互效果：
            </p>
            <div className="space-x-2">
              <Button 
                variant="primary" 
                onClick={() => alert('你点击了主要按钮！')}
              >
                点击我
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => alert('你点击了次要按钮！')}
              >
                或者我
              </Button>
            </div>
          </div>
        </Card>
        
        <Card title="状态演示">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">正常状态</h4>
              <Button variant="primary">正常按钮</Button>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">禁用状态</h4>
              <Button variant="primary" disabled>禁用按钮</Button>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="/" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          返回首页
        </a>
      </div>
    </div>
  )
} 